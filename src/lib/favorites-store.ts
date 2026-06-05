import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();
let favorites = new Set<string>(["nutella", "evian", "nike-airmax"]);

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
    emit();
  },
  has(id: string) {
    return favorites.has(id);
  },
};

export function useFavorites() {
  return useSyncExternalStore(
    favStore.subscribe,
    () => favStore.get(),
    () => favStore.get(),
  );
}
