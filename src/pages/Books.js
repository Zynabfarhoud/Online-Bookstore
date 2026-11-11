import Rimage1 from "../assests/books/Rimage1.jpeg";
import Rimage2 from "../assests/books/Rimage2.jpeg";
import Rimage3 from "../assests/books/Rimage3.jpeg";
import Rimage4 from "../assests/books/Rimage4.jpeg";

import Mimage from "../assests/books/Mimage.jpeg";
import Mimage1 from "../assests/books/Mimage1.jpeg";
import Mimage2 from "../assests/books/Mimage2.jpeg";
import Mimage4 from "../assests/books/Mimage4.jpeg";

import Fimage1 from "../assests/books/Fimage1.jpeg";
import Fimage2 from "../assests/books/Fimage2.jpeg";
import Fimage3 from "../assests/books/Fimage3.jpeg";
import Fimage4 from "../assests/books/Fimage4.jpeg";

import Himage1 from "../assests/books/Himage1.jpeg";
import Himage2 from "../assests/books/Himage2.jpeg";
import Himage3 from "../assests/books/Himage3.jpeg";
import Himage4 from "../assests/books/Himage4.jpeg";

const Books = [
  {
    id: 1,
    title: "Mirror of my Soul",
    author: "Johanna Marquardt",
    price: 15,
    category: "Romance",
    image: Rimage1,
    description:
      "This New Adult romance blends enemy-to-lovers dynamics and fake-dating elements as Fee travels to Spain to work on personal growth and attachment fears. Though she initially finds Aurelian unbearable, spending two intense weeks together forces both of them to confront their pasts, address mental health topics, and navigate an unexpected deep connection.",
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 10,
    category: "Romance",
    image: Rimage2,
    description:
      "Set in 19th-century England, this classic romantic comedy satirizes manners and marriage while exploring the turbulent relationship between Elizabeth Bennet and Fitzwilliam Darcy as they overcome their respective flaws.  ",
  },

  {
    id: 3,
    title: "The Night We Met",
    author: "Abby Jimenez",
    price: 12,
    category: "Romance",
    image: Rimage3,
    description:
      "This contemporary romance follows Larissa, who develops a deep connection with Chris, her boyfriend's best friend. As their feelings grow, they must navigate friendship, loyalty, and complicated romantic choices.",
  },

  {
    id: 4,
    title: "It Ends With Us",
    author: "Collen Hoover",
    price: 18,
    category: "Romance",
    image: Rimage4,
    description:
      "He story centers on Lily Bloom, a young woman who escapes an abusive upbringing to open her own floral business in Boston. She enters an intense relationship with Ryle Kincaid, a charismatic neurosurgeon, but as warning signs of aggression appear in Ryle, the re-emergence of her homeless teenage first love, Atlas Corrigan, forces Lily to make an agonizing decision to break generational cycles of domestic abuse.",
  },

  {
    id: 5,
    title: "My Husband's Wife",
    author: "Alice Feeney",
    price: 10,
    category: "Mystery",
    image: Mimage,
    description:
      "This psychological thriller follows Eden Fox, an artist who returns home to discover that a stranger is living in her house and claiming to be her. As secrets emerge, a mysterious inheritance and hidden truths reveal a complicated web of deception.",
  },

  {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 12,
    category: "Mystery",
    image: Mimage1,
    description:
      "His psychological thriller follows Alicia Berenson, a famous painter who suddenly stops speaking after being accused of murdering her husband. Theo Faber, a psychotherapist, becomes determined to uncover the truth behind her silence and discover what really happened.",
  },

  {
    id: 7,
    title: "The Unforgetting",
    author: "Bonnie Traymore",
    price: 18,
    category: "Mystery",
    image: Mimage2,
    description:
      "Ten years after her friend Lanie died in a ravine during a wild college graduation party, Reagan struggles with postpartum depression and resurfacing flashbacks. When she returns to the Adirondack cabin for a reunion, she must uncover what really happened that night and whether the truth was covered up.",
  },

  {
    id: 8,
    title: "The Girl On The Train",
    author: "Paula Hawkins",
    price: 15,
    category: "Mystery",
    image: Mimage4,
    description:
      "Rachel takes the same daily train ride, obsessively observing a seemingly perfect couple from afar. When the woman suddenly vanishes, Rachel goes to the police with missing pieces of memory from a night of heavy drinking, pulling her into a dangerous web of deceit, murder, and unreliable narrative twists.",
  },

  {
    id: 9,
    title: "Alchemised",
    author: "SenLinYu",
    price: 18,
    category: "Fantasy",
    image: Fimage1,
    description:
      "This dark fantasy follows Helena Marino, a former alchemist held captive in a war-torn world ruled by powerful necromancers. Struggling with lost memories, she must uncover the secrets of her past while fighting to survive.",
  },

  {
    id: 10,
    title: "When The Moon Hatched",
    author: "Sarah A. Parker",
    price: 17,
    category: "Fantasy",
    image: Fimage2,
    description:
      "This romantic fantasy follows Raeve, an assassin whose life changes after a dangerous encounter. Meanwhile, dragon rider Kaan searches for answers about his lost love, leading them into a world filled with magic, dragons, and mysteries.",
  },

  {
    id: 11,
    title: "A Game Of Thrones",
    author: "George R.R. Martin",
    price: 20,
    category: "Fantasy",
    image: Fimage3,
    description:
      "The first book in this epic fantasy series chronicles violent political and dynastic struggles among noble families across Westeros and Essos while an ancient threat awakens in the north.",
  },

  {
    id: 12,
    title: "The Chronicles Of Narnia",
    author: "C. S. Lewis",
    price: 20,
    category: "Fantasy",
    image: Fimage4,
    description:
      "This fantasy adventure follows four siblings who discover a magical land called Narnia through an old wardrobe. Ruled by the evil White Witch, Narnia is trapped in an endless winter. With the help of the great lion Aslan, the children embark on an adventure to restore peace and freedom.",
  },

  {
    id: 13,
    title: "Inhumanity",
    author: "Nicholas Barker",
    price: 18,
    category: "Horror",
    image: Himage1,
    description:
      "Set in 19th-century North Carolina, this horror-thriller follows Benjamin, a man of intellect who inherits a haunting estate filled with terrifying forces. As sinister entities begin tormenting him, Benjamin must confront evil spirits and deep family secrets to survive.",
  },

  {
    id: 14,
    title: "The Exorcist",
    author: "Wiliam Peter Blatty",
    price: 17,
    category: "Horror",
    image: Himage2,
    description:
      "The narrative follows eleven-year-old Regan MacNeil, who begins exhibiting terrifying, inexplicable behavior. When medical science fails to explain her condition, her desperate mother turns to Father Karras, a Jesuit priest struggling with his own faith, who enlists Father Merrin to perform a dangerous exorcism to free the girl.",
  },

  {
    id: 15,
    title: "The Caretaker",
    author: "Marcus Kliewer",
    price: 15,
    category: "Horror",
    image: Himage3,
    description:
      "The plot follows a man taking a job to look after a remote estate nestled deep in the woods. As strange, unnatural events begin happening around the grounds, he realizes the property holds bizarre secrets, forcing him to determine what is real and what is taking control of his mind.",
  },

  {
    id: 16,
    title: "Japanese Gothic",
    author: "Kylie Lee Baker",
    price: 16,
    category: "Horror",
    image: Himage4,
    description:
      "Set during the late 19th century, the story centers on a young woman navigating societal isolation and eerie supernatural occurrences in an isolated Japanese estate. As strange murders and vengeful spirits emerge, she must uncover her family's dark past and confront the horrifying rituals bound to the land.",
  },
];

export default Books;
