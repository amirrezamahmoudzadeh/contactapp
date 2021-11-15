const initialState = [
  {
    id: 1,
    name: "Amir Reza",
    phone: 9189903700,
    email: "amirrezamah1998@gmail.com",
  },
  {
    id: 2,
    name: "Ali",
    phone: 9030628700,
    email: "ali@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
      
    case "UPDATE_CONTACT":
      const updatedState = state.map((contact=> contact.id === action.payload.id? action.payload : contact))
      state =updatedState
      return state;

    case "DELETE_CONTACT":
      const filteredContacts = state.filter((contact=> contact.id !== action.payload && contact))
      state = filteredContacts
      return state;
    default:
      return state;
  }
};

export default contactReducer;
