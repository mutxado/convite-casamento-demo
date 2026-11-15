import {
  DEMO_TABLES,
  DEMO_RSVPS,
  DEMO_MANUAL_GUESTS,
  DEMO_SEATING_ASSIGNMENTS,
  DEMO_MESSAGES,
} from './data/demoSeed';

// =========================================================================
// MOTOR DE DADOS DEMO ISOLADO (localStorage + Semente Pré-carregada)
// Não conecta a nenhum projeto Firebase de clientes reais.
// =========================================================================
export const STORAGE_KEYS = {
  rsvps: 'carlos_nadia_demo_rsvps',
  messages: 'carlos_nadia_demo_messages',
  tables: 'carlos_nadia_demo_tables',
  seating: 'carlos_nadia_demo_seating',
  manualGuests: 'carlos_nadia_demo_manual_guests',
  seeded: 'carlos_nadia_demo_seeded_v1',
};

const listeners = {
  rsvps: new Set(),
  messages: new Set(),
  tables: new Set(),
  seating: new Set(),
  manualGuests: new Set(),
};

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('Demo localStorage write error:', err);
  }
}

export function ensureDemoSeeded() {
  try {
    if (!localStorage.getItem(STORAGE_KEYS.seeded)) {
      writeStorage(STORAGE_KEYS.rsvps, DEMO_RSVPS);
      writeStorage(STORAGE_KEYS.tables, DEMO_TABLES);
      writeStorage(STORAGE_KEYS.manualGuests, DEMO_MANUAL_GUESTS);
      writeStorage(STORAGE_KEYS.seating, DEMO_SEATING_ASSIGNMENTS);
      writeStorage(STORAGE_KEYS.messages, DEMO_MESSAGES);
      localStorage.setItem(STORAGE_KEYS.seeded, 'true');
    }
  } catch (err) {
    console.warn('Demo seed init error:', err);
  }
}

export function resetDemoData() {
  writeStorage(STORAGE_KEYS.rsvps, DEMO_RSVPS);
  writeStorage(STORAGE_KEYS.tables, DEMO_TABLES);
  writeStorage(STORAGE_KEYS.manualGuests, DEMO_MANUAL_GUESTS);
  writeStorage(STORAGE_KEYS.seating, DEMO_SEATING_ASSIGNMENTS);
  writeStorage(STORAGE_KEYS.messages, DEMO_MESSAGES);
  localStorage.setItem(STORAGE_KEYS.seeded, 'true');

  notify('rsvps', DEMO_RSVPS);
  notify('tables', DEMO_TABLES);
  notify('manualGuests', DEMO_MANUAL_GUESTS);
  notify('seating', DEMO_SEATING_ASSIGNMENTS);
  notify('messages', DEMO_MESSAGES);
}

function notify(channel, payload) {
  listeners[channel].forEach((cb) => {
    try {
      cb(payload);
    } catch (e) {
      console.error('Demo listener error:', e);
    }
  });
}

// Seed immediately on module load
ensureDemoSeeded();

export const db = null;
export const isFirebaseReady = true;

// 1. Guardar Confirmação de Presença (RSVP)
export async function saveRsvpToFirestore(rsvpData) {
  ensureDemoSeeded();
  const id = `rsvp-${Date.now()}`;
  const entry = {
    ...rsvpData,
    id,
    createdDate: new Date().toLocaleString('pt-MZ'),
  };
  const current = readStorage(STORAGE_KEYS.rsvps, DEMO_RSVPS);
  const updated = [entry, ...current];
  writeStorage(STORAGE_KEYS.rsvps, updated);
  notify('rsvps', updated);
  return id;
}

// 2. Ouvir Confirmações em Tempo Real
export function subscribeToRsvps(callback) {
  ensureDemoSeeded();
  callback(readStorage(STORAGE_KEYS.rsvps, DEMO_RSVPS));
  listeners.rsvps.add(callback);
  return () => listeners.rsvps.delete(callback);
}

// 3. Eliminar Confirmação
export async function deleteRsvpFromFirestore(id) {
  if (!id) return;
  const current = readStorage(STORAGE_KEYS.rsvps, DEMO_RSVPS);
  const updated = current.filter((item) => item.id !== id);
  writeStorage(STORAGE_KEYS.rsvps, updated);
  notify('rsvps', updated);
}

// 4. Guardar Mensagem no Mural
export async function saveMessageToFirestore(messageData) {
  ensureDemoSeeded();
  const id = `msg-${Date.now()}`;
  const entry = {
    ...messageData,
    id,
    createdDate: new Date().toLocaleString('pt-MZ'),
  };
  const current = readStorage(STORAGE_KEYS.messages, DEMO_MESSAGES);
  const updated = [entry, ...current];
  writeStorage(STORAGE_KEYS.messages, updated);
  notify('messages', updated);
  return id;
}

// 5. Ouvir Mensagens do Mural
export function subscribeToMessages(callback) {
  ensureDemoSeeded();
  callback(readStorage(STORAGE_KEYS.messages, DEMO_MESSAGES));
  listeners.messages.add(callback);
  return () => listeners.messages.delete(callback);
}

// 6. Gestão de Mesas e Alocações
export async function syncTablesToFirestore(tablesArray) {
  writeStorage(STORAGE_KEYS.tables, tablesArray);
  notify('tables', tablesArray);
}

export function subscribeToTables(callback) {
  ensureDemoSeeded();
  callback(readStorage(STORAGE_KEYS.tables, DEMO_TABLES));
  listeners.tables.add(callback);
  return () => listeners.tables.delete(callback);
}

export async function syncSeatingAssignmentsToFirestore(assignmentsObj) {
  writeStorage(STORAGE_KEYS.seating, assignmentsObj);
  notify('seating', assignmentsObj);
}

export function subscribeToSeatingAssignments(callback) {
  ensureDemoSeeded();
  callback(readStorage(STORAGE_KEYS.seating, DEMO_SEATING_ASSIGNMENTS));
  listeners.seating.add(callback);
  return () => listeners.seating.delete(callback);
}

export async function syncManualGuestsToFirestore(manualGuestsArray) {
  writeStorage(STORAGE_KEYS.manualGuests, manualGuestsArray);
  notify('manualGuests', manualGuestsArray);
}

export function subscribeToManualGuests(callback) {
  ensureDemoSeeded();
  callback(readStorage(STORAGE_KEYS.manualGuests, DEMO_MANUAL_GUESTS));
  listeners.manualGuests.add(callback);
  return () => listeners.manualGuests.delete(callback);
}
