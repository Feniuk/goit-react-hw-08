import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const INITAL_STATE = {
  items: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    prepare(value) {
      return {
        payload: {
          ...value,
          id: nanoid(),
        },
      };
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
