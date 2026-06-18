import { useSyncExternalStore } from "react";

const KEY = "aimesee_favorites";
const listeners = new Set<() => void>();

function readFromStorage(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function writeToStorage(set: Set<string>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(Array.from(set)));
  } catch {
    /* ignore */
  }
}

let favorites: Set<string> = readFromStorage();

function emit() {
  listeners.forEach((l) => l());
}

export const favStore = {
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  get() {
    return favorites;
  },
  toggle(id: string) {
    const next = new Set(favorites);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    favorites = next;
    writeToStorage(favorites);
    emit();
  },
  has(id: string) {
    return favorites.has(id);
  },
};

const emptySet = new Set<string>();

export function useFavorites() {
  return useSyncExternalStore(
    favStore.subscribe,
    () => favStore.get(),
    () => emptySet,
  );
}
