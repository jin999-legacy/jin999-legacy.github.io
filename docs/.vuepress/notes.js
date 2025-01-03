import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-TW ======================= */

const zhTWDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const zhTWNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhTWDemoNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

/* =================== locale: zh-CN ======================= */

const zhCNDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const zhCNNotes = defineNotesConfig({
  dir: 'notes',
  link: '/cn/',
  notes: [zhCNDemoNote],
})