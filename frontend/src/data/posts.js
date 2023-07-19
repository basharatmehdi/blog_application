const posts = [
  {
    id: 1,
    title: "His mother had always taught him",
    imageUrl:
      "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
    date: "10/03/2023",
    author: "Author",
    description:
      "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 9,
    tags: ["history", "american", "crime"],
    likes: 2,
    category: "Travel",
    views: 76,
  },
  {
    id: 2,
    title: "He was an expert but not in a discipline",
    imageUrl:
      "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
    userId: 13,
    tags: ["french", "fiction", "english"],
    likes: 2,
    category: "Travel",
    views: 15,
  },
  {
    id: 3,
    title: "Dave watched as the forest burned up on the hill.",
    imageUrl:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    userId: 32,
    tags: ["magical", "history", "french"],
    likes: 5,
    category: "Travel",
    views: 21,
  },
  {
    id: 4,
    title: "All he wanted was a candy bar.",
    imageUrl:
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    userId: 12,
    tags: ["mystery", "english", "american"],
    likes: 1,
    category: "Travel",
    views: 43,
  },
  {
    id: 5,
    title: "Hopes and dreams were dashed that day.",
    imageUrl:
      "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
    userId: 41,
    tags: ["crime", "mystery", "love"],
    likes: 2,
    category: "Travel",
    views: 9,
  },
  {
    id: 6,
    title: "Dave wasn't exactly sure how he had ended up",
    imageUrl:
      "https://images.pexels.com/photos/242268/pexels-photo-242268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
    userId: 47,
    tags: ["english", "classic", "american"],
    likes: 3,
    category: "Travel",
    views: 56,
  },
  {
    id: 7,
    title: "This is important to remember.",
    imageUrl:
      "https://images.pexels.com/photos/208421/pexels-photo-208421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
    userId: 12,
    tags: ["magical", "crime"],
    likes: 0,
    category: "Travel",
    views: 23,
  },
  {
    id: 8,
    title: "One can cook on and with an open fire.",
    imageUrl:
      "https://images.pexels.com/photos/112283/pexels-photo-112283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
    userId: 31,
    tags: ["american", "english"],
    likes: 9,
    category: "Travel",
    views: 32,
  },
  {
    id: 9,
    title: "There are different types of secrets.",
    imageUrl:
      "https://images.pexels.com/photos/3082638/pexels-photo-3082638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
    userId: 42,
    tags: ["american", "history", "magical"],
    likes: 2,
    category: "Travel",
    views: 13,
  },
  {
    id: 10,
    title: "They rushed out the door.",
    imageUrl:
      "https://images.pexels.com/photos/1756106/pexels-photo-1756106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "10/03/2023",
    author: "Author",
    description:
      "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
    userId: 1,
    tags: ["fiction", "magical", "history"],
    likes: 4,
    category: "Travel",
    views: 23,
  },
];

export default posts;
