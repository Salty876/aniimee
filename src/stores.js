import { writable } from "svelte/store"
import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"

export const animeInfo = persist(writable(), createLocalStorage(), "animeInfo")

