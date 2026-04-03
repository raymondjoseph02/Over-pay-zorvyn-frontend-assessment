import DummyImage from "../assets/img/user-profile.png";

export interface Contact {
  id: number;
  name: string;
  image: string;
  email: string;
  accountNumber: string;
}

export const contacts: Contact[] = [
  { id: 1, name: "Francene", image: DummyImage, email: "francene@mail.com", accountNumber: "OV100234567890" },
  { id: 2, name: "Marcus", image: DummyImage, email: "marcus@mail.com", accountNumber: "OV200345678901" },
  { id: 3, name: "Alesia", image: DummyImage, email: "alesia@mail.com", accountNumber: "OV300456789012" },
  { id: 4, name: "Jordan", image: DummyImage, email: "jordan@mail.com", accountNumber: "OV400567890123" },
  { id: 5, name: "Taylor", image: DummyImage, email: "taylor@mail.com", accountNumber: "OV500678901234" },
  { id: 6, name: "Riley", image: DummyImage, email: "riley@mail.com", accountNumber: "OV600789012345" },
];
