const express = require("express");
const router = express.Router();

const conn = require("../db/connection.js");
const { ObjectId } = require("mongodb");
const notesCollection = conn.notesCollection;
const subjectsCollection = conn.subjectsCollection;

router
  .route("/")
  // Get All Notes
  .get(async (req, res) => {
    const result = await notesCollection.find({}).toArray();
    res.json(result);
  })
  // Create New Note
  .post(async (req, res) => {
    const result = await notesCollection.insertOne(req.body);
    res.json(req.body);
  });

router
  .route("/:id")
  // Get Note by ID
  .get(async (req, res) => {
    const noteID = Number(req.params.id);
    const result = await notesCollection
      .find({ id: noteID }, { projection: { _id: 0 } })
      .toArray();

    res.json(result);
  })

  // Delete Note by ID
  .delete(async (req, res) => {
    const noteID = Number(req.params.id);
    const result = await notesCollection.deleteOne({ id: noteID });

    res.json({ Deleted: true });
  });

module.exports = router;

// [
//   {
//     _id: ObjectId("673eecf45994e0768c550f4c"),
//     id: 1,
//     subject_id: 'ObjectId(673e1b7c5994e0768c4b525a)',
//     title: 'Photosynthesis Process',
//     content: 'Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen, essential for plant growth and life
// on Earth.\n' +
//       '- Equation: 6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂\n' +
//       '- Stages:\n' +
//       '  - Light-dependent reactions: Occur in the thylakoid membranes, converting sunlight to ATP and NADPH.\n' +
//       '  - Calvin Cycle: Occurs in the stroma, using ATP and NADPH to synthesize glucose.',
//     date: '2024-11-06',
//     time: '09:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f4d"),
//     id: 2,
//     subject_id: 'ObjectId(673e1b7c5994e0768c4b525a)',
//     title: 'DNA Structure and Replication',
//     content: 'DNA, or deoxyribonucleic acid, is the molecule that carries genetic information in cells.\n' +
//       '- Structure: Double helix composed of nucleotides (adenine, thymine, cytosine, guanine).\n' +
//       '- Base Pairing: A pairs with T, C pairs with G.\n' +
//       '- Replication Process:\n' +
//       '  - Unwinding: Helicase enzyme separates the DNA strands.\n' +
//       '  - Complementary Base Pairing: DNA polymerase adds new nucleotides to each strand.\n' +
//       '  - Result: Two identical DNA molecules.',
//     date: '2024-11-06',
//     time: '10:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f4e"),
//     id: 3,
//     subject_id: 'ObjectId(673e1b7c5994e0768c4b525b)',
//     title: 'Object-Oriented Programming (OOP)',
//     content: 'OOP is a programming paradigm centered around objects, which are instances of classes.\n' +
//       '- Key Concepts:\n' +
//       '  - Class: A blueprint for creating objects.\n' +
//       '  - Object: An instance of a class.\n' +
//       '  - Inheritance: Allows a class to inherit properties from another class.\n' +
//       '  - Polymorphism: Methods can perform different functions based on context.\n' +
//       '  - Encapsulation: Hides internal states, exposing only what’s necessary.',
//     date: '2024-11-06',
//     time: '11:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f4f"),
//     id: 4,
//     subject_id: 'ObjectId(673e1b7c5994e0768c4b525b)',
//     title: 'Data Structures: Arrays and Linked Lists',
//     content: 'Data structures are ways of organizing and storing data for efficient access and modification.\n' +
//       '- Array: A collection of elements stored at contiguous memory locations.\n' +
//       '  - Fixed Size: Can’t expand once defined.\n' +
//       '  - Index-Based Access: Access elements by their index.\n' +
//       '- Linked List: A collection of nodes where each node points to the next.\n' +
//       '  - Dynamic Size: Can grow or shrink as needed.\n' +
//       '  - Types: Singly linked list, doubly linked list, circular linked list.',
//     date: '2024-11-06',
//     time: '12:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f50"),
//     id: 5,
//     subject_id: 'ObjectId(673e1b7c5994e0768c4b525c)',
//     title: 'Trigonometry Basics',
//     content: 'Trigonometry deals with the relationships between the sides and angles of triangles.\n' +
//       '- Right Triangle Ratios:\n' +
//       '  - Sine: sin θ = opposite/hypotenuse\n' +
//       '  - Cosine: cos θ = adjacent/hypotenuse\n' +
//       '  - Tangent: tan θ = opposite/adjacent\n' +
//       '- Pythagorean Identity: sin²θ + cos²θ = 1.',
//     date: '2024-11-06',
//     time: '13:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f51"),
//     id: 6,
//     subject_id: 'ObjectId(673e1b7c5994e0768c4b525c)',
//     title: 'Probability Basics',
//     content: 'Probability is the measure of the likelihood of an event occurring.\n' +
//       '- Probability Formula: P(A) = Number of favorable outcomes / Total outcomes.\n' +
//       '- Types of Events:\n' +
//       '  - Independent Events: The outcome of one event doesn’t affect the other.\n' +
//       '  - Dependent Events: The outcome of one event affects the other.\n' +
//       '- Addition Rule: P(A or B) = P(A) + P(B) - P(A and B).',
//     date: '2024-11-06',
//     time: '14:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f52"),
//     id: 7,
//     subject_id: 'ObjectId(673e1b7c5994e0768c4b525d)',
//     title: 'The Lifecycle of Stars',
//     content: 'Stars undergo a series of stages over billions of years, from formation to eventual death.\n' +
//       '- Stages:\n' +
//       '  - Nebula: Cloud of gas and dust collapses to form a protostar.\n' +
//       '  - Main Sequence: Hydrogen fusion occurs, stabilizing the star.\n' +
//       '  - Red Giant: Star expands as hydrogen runs out, and helium fuses.\n' +
//       '  - Supernova: Explosive end of a star, creating heavier elements.\n' +
//       '  - Black Hole or Neutron Star: Possible remnants of a supernova.',
//     date: '2024-11-06',
//     time: '15:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f53"),
//     id: 8,
//     subject_id: 'ObjectId(673e1b7c5994e0768c4b525d)',
//     title: 'Planetary Motion and Kepler’s Laws',
//     content: 'Johannes Kepler’s laws describe the motion of planets around the Sun.\n' +
//       '- First Law: Planets move in elliptical orbits with the Sun at one focus.\n' +
//       '- Second Law: A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.\n' +
//       "- Third Law: The square of a planet's orbital period is proportional to the cube of the semi-major axis of its orbit.",
//     date: '2024-11-06',
//     time: '16:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f54"),
//     id: 9,
//     subject_id: 'ObjectId(673edfc3ceb32e1937293381)',
//     title: 'Gross Domestic Product (GDP)',
//     content: 'GDP is the total value of goods and services produced within a country over a specific period.\n' +
//       '- Types of GDP:\n' +
//       '   - Nominal GDP: Measures output at current prices.\n' +
//       '   - Real GDP: Adjusts for inflation, providing a more accurate economic measure.\n' +
//       '- GDP Calculation Methods:\n' +
//       '   - Expenditure Approach: GDP = C + I + G + (X - M).\n' +
//       '   - Income Approach: Adds all incomes earned by factors of production.',
//     date: '2024-11-06',
//     time: '17:00'
//   },
//   {
//     _id: ObjectId("673eecf45994e0768c550f55"),
//     id: 10,
//     subject_id: 'ObjectId(673edfc3ceb32e1937293381)',
//     title: 'Monetary Policy and Inflation',
//     content: 'Monetary policy involves managing the money supply to control inflation, unemployment, and economic growth.\n' +
//       '- Types of Monetary Policy:\n' +
//       '   - Expansionary: Lowers interest rates to boost spending and investment.\n' +
//       '   - Contractionary: Raises interest rates to curb inflation.\n' +
//       '   - Inflation: The rate at which the general level of prices for goods and services rises.\n' +
//       '   - Tools of Monetary Policy:\n' +
//       '     - Interest Rates: Central banks adjust rates to influence borrowing.\n' +
//       '     - Reserve Requirements: Minimum amount banks must hold, affecting lending.',
//     date: '2024-11-06',
//     time: '18:00'
//   }
// ]
