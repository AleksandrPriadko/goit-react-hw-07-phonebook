import { createSelector } from "reselect";

export const getFilterSelector = (state) => state.contacts.filter;
export const getContactsSelector = (state) => state.contacts.items;

export const visibleContacts = createSelector(
  [getContactsSelector, getFilterSelector],
  (items, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return items.filter(({ name, number }) => {
      const fiterNumber = String(number).includes(filter);
      return name.toLocaleLowerCase().includes(normalizedFilter) || fiterNumber;
    });
  }
);
