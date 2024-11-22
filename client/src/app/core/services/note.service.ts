import { Injectable } from "@angular/core";
import { NotecardInterface } from "../interfaces/notecard-interface";
import { SubjectInterface } from "../interfaces/subject-interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class noteService {
  API_URL = "http://localhost:8080/api/v1";
  constructor(private http: HttpClient) {}

  protected subjectList: SubjectInterface[] = [
    {
      name: "Biology",
      color: "#4CAF50",
      id: 1,
      isEditing: false,
    },
    {
      name: "Computer Science",
      color: "#2196F3",
      id: 2,
      isEditing: false,
    },
    {
      name: "Mathematics",
      color: "#FF9800",
      id: 3,
      isEditing: false,
    },
    {
      name: "Astronomy",
      color: "#9C27B0",
      id: 4,
      isEditing: false,
    },
    {
      name: "Economics",
      color: "#795548",
      id: 5,
      isEditing: false,
    },
  ];

  protected notesList: NotecardInterface[] = [
    {
      id: 1,
      subject: "Biology",
      title: "Photosynthesis Process",
      content: `
        Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen, essential for plant growth and life on Earth.
        - Equation: 6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂
        - Stages:
          - Light-dependent reactions: Occur in the thylakoid membranes, converting sunlight to ATP and NADPH.
          - Calvin Cycle: Occurs in the stroma, using ATP and NADPH to synthesize glucose.
      `,
      date: "2024-11-06",
      time: "09:00",
      color: "#4CAF50",
    },
    {
      id: 2,
      subject: "Biology",
      title: "DNA Structure and Replication",
      content: `
        DNA, or deoxyribonucleic acid, is the molecule that carries genetic information in cells.
        - Structure: Double helix composed of nucleotides (adenine, thymine, cytosine, guanine).
        - Base Pairing: A pairs with T, C pairs with G.
        - Replication Process:
          - Unwinding: Helicase enzyme separates the DNA strands.
          - Complementary Base Pairing: DNA polymerase adds new nucleotides to each strand.
          - Result: Two identical DNA molecules.
      `,
      date: "2024-11-06",
      time: "10:00",
      color: "#4CAF50",
    },
    {
      id: 3,
      subject: "Computer Science",
      title: "Object-Oriented Programming (OOP)",
      content: `
        OOP is a programming paradigm centered around objects, which are instances of classes.
        - Key Concepts:
          - Class: A blueprint for creating objects.
          - Object: An instance of a class.
          - Inheritance: Allows a class to inherit properties from another class.
          - Polymorphism: Methods can perform different functions based on context.
          - Encapsulation: Hides internal states, exposing only what’s necessary.
      `,
      date: "2024-11-06",
      time: "11:00",
      color: "#2196F3",
    },
    {
      id: 4,
      subject: "Computer Science",
      title: "Data Structures: Arrays and Linked Lists",
      content: `
        Data structures are ways of organizing and storing data for efficient access and modification.
        - Array: A collection of elements stored at contiguous memory locations.
          - Fixed Size: Can’t expand once defined.
          - Index-Based Access: Access elements by their index.
        - Linked List: A collection of nodes where each node points to the next.
          - Dynamic Size: Can grow or shrink as needed.
          - Types: Singly linked list, doubly linked list, circular linked list.
      `,
      date: "2024-11-06",
      time: "12:00",
      color: "#2196F3",
    },
    {
      id: 5,
      subject: "Mathematics",
      title: "Trigonometry Basics",
      content: `
        Trigonometry deals with the relationships between the sides and angles of triangles.
        - Right Triangle Ratios:
          - Sine: sin θ = opposite/hypotenuse
          - Cosine: cos θ = adjacent/hypotenuse
          - Tangent: tan θ = opposite/adjacent
        - Pythagorean Identity: sin²θ + cos²θ = 1.
      `,
      date: "2024-11-06",
      time: "13:00",
      color: "#FF9800",
    },
    {
      id: 6,
      subject: "Mathematics",
      title: "Probability Basics",
      content: `
        Probability is the measure of the likelihood of an event occurring.
        - Probability Formula: P(A) = Number of favorable outcomes / Total outcomes.
        - Types of Events:
          - Independent Events: The outcome of one event doesn’t affect the other.
          - Dependent Events: The outcome of one event affects the other.
        - Addition Rule: P(A or B) = P(A) + P(B) - P(A and B).
      `,
      date: "2024-11-06",
      time: "14:00",
      color: "#FF9800",
    },
    {
      id: 7,
      subject: "Astronomy",
      title: "The Lifecycle of Stars",
      content: `
        Stars undergo a series of stages over billions of years, from formation to eventual death.
        - Stages:
          - Nebula: Cloud of gas and dust collapses to form a protostar.
          - Main Sequence: Hydrogen fusion occurs, stabilizing the star.
          - Red Giant: Star expands as hydrogen runs out, and helium fuses.
          - Supernova: Explosive end of a star, creating heavier elements.
          - Black Hole or Neutron Star: Possible remnants of a supernova.
      `,
      date: "2024-11-06",
      time: "15:00",
      color: "#9C27B0",
    },
    {
      id: 8,
      subject: "Astronomy",
      title: "Planetary Motion and Kepler’s Laws",
      content: `
        Johannes Kepler’s laws describe the motion of planets around the Sun.
        - First Law: Planets move in elliptical orbits with the Sun at one focus.
        - Second Law: A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.
        - Third Law: The square of a planet's orbital period is proportional to the cube of the semi-major axis of its orbit.
      `,
      date: "2024-11-06",
      time: "16:00",
      color: "#9C27B0",
    },
    {
      id: 9,
      subject: "Economics",
      title: "Gross Domestic Product (GDP)",
      content: `
        GDP is the total value of goods and services produced within a country over a specific period.
        - Types of GDP:
          - Nominal GDP: Measures output at current prices.
          - Real GDP: Adjusts for inflation, providing a more accurate economic measure.
        - GDP Calculation Methods:
          - Expenditure Approach: GDP = C + I + G + (X - M).
          - Income Approach: Adds all incomes earned by factors of production.
      `,
      date: "2024-11-06",
      time: "17:00",
      color: "#795548",
    },
    {
      id: 10,
      subject: "Economics",
      title: "Monetary Policy and Inflation",
      content: `
        Monetary policy involves managing the money supply to control inflation, unemployment, and economic growth.
        - Types of Monetary Policy:
          - Expansionary: Lowers interest rates to boost spending and investment.
          - Contractionary: Raises interest rates to curb inflation.
        - Inflation: The rate at which the general level of prices for goods and services rises.
        - Tools of Monetary Policy:
          - Interest Rates: Central banks adjust rates to influence borrowing.
          - Reserve Requirements: Minimum amount banks must hold, affecting lending.
      `,
      date: "2024-11-06",
      time: "18:00",
      color: "#795548",
    },
  ];

  // GET All Notes
  async getAllNotes(): Promise<NotecardInterface[]> {
    const notes = await fetch(`${this.API_URL}/notes`);
    return (await notes.json()) ?? [];
  }

  // GET Note by Id
  async getNoteById(id: Number): Promise<NotecardInterface[]> {
    const notes = await fetch(`${this.API_URL}/notes/${id}`);
    return (await notes.json()) ?? [];
    // git add .; git commit -m "getNoteById on services.ts done";
  }

  // DELETE Note By Id

  async deleteNoteById(id: Number): Promise<void> {
    const response = await fetch(`${this.API_URL}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
  }

  addNote(obj: NotecardInterface): void {
    this.notesList.push(obj);
  }

  updateNote(obj: NotecardInterface): void {
    console.log(obj);
    // IMPLEMENT THE LOGIC WITH DATABASE
  }

  // Note Subject Services
  async getAllSubjects(): Promise<SubjectInterface[]> {
    // return this.subjectList;
    const subjects = await fetch(`${this.API_URL}/subjects`);
    return (await subjects.json()) ?? [];
  }

  getSubjectColorByName(name: any) {
    return this.subjectList.find((subject) => subject.name === name)?.color;
  }

  addSubject(obj: SubjectInterface): void {
    this.subjectList.push(obj);
  }

  updateSubject(obj: SubjectInterface) {
    // IMPLEMENT THE LOGIC WITH DATABASE
    console.log(obj);
  }

  deleteSubjectById(id: number): void {
    // IMPLEMENT THE LOGIC WITH DATABASE
    console.log(id);
  }

  async getSubjectByNoteID(id: Number): Promise<SubjectInterface[]> {
    const subject = await fetch(
      `${this.API_URL}/subjects/getSubjectByNoteID/${id}`
    );
    return (await subject.json()) ?? [];
  }
}
