import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectSearchFilter = state => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectSearchFilter],
  (contacts, searchFilter) => {
    return contacts.filter(contactLists =>
      contactLists.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }
);
