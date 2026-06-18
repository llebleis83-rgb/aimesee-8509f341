import { useSyncExternalStore } from "react";
import type { HistoryEntry } from "./types";

const KEY = "aimesee_history";
const MAX = 50;
const ONE_HOUR = 60 * 60 * 1000;
const listeners = new Set<() => void>();

function read(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as HistoryEntry[];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function write(entries: HistoryEntry[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(entries));
  } catch {
    /* ignore */
  }
}

let history: HistoryEntry[] = read();

function emit() {
  listeners.forEach((l) => l());
}

export const historyStore = {
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  get() {
    return history;
  },
  record(product_id: string) {
    const now = Date.now();
    // dedupe within same hour
    const recent = history.find(
      (h) => h.product_id === product_id && now - h.timestamp < ONE_HOUR,
    );
    if (recent) return;
    const next = [{ product_id, timestamp: now }, ...history].slice(0, MAX);
    history = next;
    write(history);
    emit();
  },
  clear() {
    history = [];
    write(history);
    emit();
  },
};

const empty: HistoryEntry[] = [];

export function useHistory() {
  return useSyncExternalStore(
    historyStore.subscribe,
    () => historyStore.get(),
    () => empty,
  );
}
