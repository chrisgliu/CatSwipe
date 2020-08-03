const CardData = [
    {
      id: 1,
      name: 'Abigail',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'1 year',
      url: "https://g.petango.com/photos/818/6711fc09-e14d-408a-8f47-3ba420c5aef7_TN1.jpg"
    },
    {
      id: 2,
      name: 'Cat Boy',
      sex: 'Male/Neutered',
      detail:'Domestic Shorthair',
      age:'2 years',
      url: 'https://g.petango.com/photos/818/61972a13-ab73-46f7-a487-10ad2d215a6d_TN1.jpg'
    },
    {
      id: 3,
      name: 'Cherie',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/8f31b518-152f-4fb5-bbd4-e46355444efe_TN1.jpg"
    },
    {
      id: 4,
      name: 'Chip',
      sex: 'Male',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/ffadb7bf-10a0-438e-bc86-03e9190d364b_TN1.jpg"
    },
    {
      id: 5,
      name: 'Darla',
      sex: 'Female',
      detail:'Domestic Shorthair/Mix',
      age:'4 months',
      url: "https://g.petango.com/photos/818/f5c11b41-8b47-47d5-83bd-a6a81b3e2db4_TN1.jpg"
    },
    {
      id: 6,
      name: 'Ernie',
      sex: 'Male',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/63c4f7b6-821b-4781-a187-3e5ec7ef23f7_TN1.jpg"
    },
    {
      id: 7,
      name: 'Itty Bitty',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'5 years',
      url: "https://g.petango.com/photos/818/a700c457-14f1-435b-ae7b-e3b435f2a587_TN1.jpg"
    },
    {
      id: 8,
      name: 'Kent',
      sex: 'Male/Neutered',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/0ee44e83-47a9-4b1d-95b1-b08ae051e9da_TN1.jpg"
    },
    {
      id: 9,
      name: 'Louise',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'10 years',
      url: "https://g.petango.com/photos/818/2a18c2fb-090a-4377-a8d8-d2f3b470fe76_TN1.jpg"
    },
    {
      id: 10,
      name: 'Mabel',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair',
      age:'6 years 6 months',
      url: "https://g.petango.com/photos/818/6caed355-a745-4e63-acc4-d7c523c37b1b_TN1.jpg"
    },
    {
      id: 11,
      name: 'Margo',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/8c4494b2-cb19-4fb3-9d1c-b0473b4b5094_TN1.jpg"
    },
    {
      id: 12,
      name: 'Morty',
      sex: 'Male/Neutered',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/5de0a01b-6d6e-496c-8780-8e9bb4f5fdc4_TN1.jpg"
    },
    {
      id: 13,
      name: 'Moxi',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'3 months',
      url: "https://g.petango.com/photos/818/9a444565-123e-428b-a92e-303d845fc2df_TN1.jpg"
    },
    {
      id: 14,
      name: 'Priscilla',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'4 years 1 month',
      url: "https://g.petango.com/photos/818/6fe18929-64ec-499f-9a16-142b97087804_TN1.jpg"
    },
    {
      id: 15,
      name: 'Rick',
      sex: 'Male/Neutered',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/0554133d-d057-4a5a-9e04-a40d93a3fe5a_TN1.jpg"
    },
    {
      id: 16,
      name: 'Robbie',
      sex: 'Male',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/cf7b3225-2ba1-4f82-87a8-55482a584fba_TN1.jpg"
    },
    {
      id: 17,
      name: 'Rosie',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'5 years',
      url: "https://g.petango.com/photos/818/43c68419-5ad5-4c83-b182-ca06f6c3173f_TN1.jpg"
    },
    {
      id: 18,
      name: 'Sasha',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'6 years',
      url: "https://g.petango.com/photos/818/61289322-5ef3-4814-a874-b642bdd84c7b_TN1.jpg"
    },
    {
      id: 19,
      name: 'Simba',
      sex: 'Male/Neutered',
      detail:'Domestic Shorthair/Mix',
      age:'1 year',
      url: "https://g.petango.com/shared/Photo-Not-Available-cat.gif"
    },
    {
      id: 20,
      name: 'Vanessa',
      sex: 'Female/Spayed',
      detail:'Domestic Shorthair/Mix',
      age:'2 months',
      url: "https://g.petango.com/photos/818/79ce7f0c-e557-41c3-b7a1-f97a73b8447d_TN1.jpg"
    },
 ];
 
export default CardData;
