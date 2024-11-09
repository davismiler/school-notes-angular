import { Component } from '@angular/core';
import { NoteCardsComponent } from '../note-cards/note-cards.component';
import { SubjectCardsComponent } from '../subject-cards/subject-cards.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NotecardInterface } from '../interfaces/notecard-interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    NoteCardsComponent,
    SubjectCardsComponent,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // OPn & Close Sidebar on Mobile
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  // Note Cards

  notes: NotecardInterface[] = [
    {
      id: 1,
      subject: 'Biology',
      title: 'Photosynthesis Process',
      content: `
        Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen, essential for plant growth and life on Earth.
        - Equation: 6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂
        - Stages:
          - Light-dependent reactions: Occur in the thylakoid membranes, converting sunlight to ATP and NADPH.
          - Calvin Cycle: Occurs in the stroma, using ATP and NADPH to synthesize glucose.
      `,
      date: '2024-11-06',
      time: '09:00',
      color: '#4CAF50', // Green for Biology
      is_favourite: false,
    },
    {
      id: 2,
      subject: 'Biology',
      title: 'DNA Structure and Replication',
      content: `
        DNA, or deoxyribonucleic acid, is the molecule that carries genetic information in cells.
        - Structure: Double helix composed of nucleotides (adenine, thymine, cytosine, guanine).
        - Base Pairing: A pairs with T, C pairs with G.
        - Replication Process:
          - Unwinding: Helicase enzyme separates the DNA strands.
          - Complementary Base Pairing: DNA polymerase adds new nucleotides to each strand.
          - Result: Two identical DNA molecules.
      `,
      date: '2024-11-06',
      time: '10:00',
      color: '#4CAF50', // Green for Biology
      is_favourite: true,
    },
    {
      id: 3,
      subject: 'Computer Science',
      title: 'Object-Oriented Programming (OOP)',
      content: `
        OOP is a programming paradigm centered around objects, which are instances of classes.
        - Key Concepts:
          - Class: A blueprint for creating objects.
          - Object: An instance of a class.
          - Inheritance: Allows a class to inherit properties from another class.
          - Polymorphism: Methods can perform different functions based on context.
          - Encapsulation: Hides internal states, exposing only what’s necessary.
      `,
      date: '2024-11-06',
      time: '11:00',
      color: '#2196F3', // Blue for Computer Science
      is_favourite: false,
    },
    {
      id: 4,
      subject: 'Computer Science',
      title: 'Data Structures: Arrays and Linked Lists',
      content: `
        Data structures are ways of organizing and storing data for efficient access and modification.
        - Array: A collection of elements stored at contiguous memory locations.
          - Fixed Size: Can’t expand once defined.
          - Index-Based Access: Access elements by their index.
        - Linked List: A collection of nodes where each node points to the next.
          - Dynamic Size: Can grow or shrink as needed.
          - Types: Singly linked list, doubly linked list, circular linked list.
      `,
      date: '2024-11-06',
      time: '12:00',
      color: '#2196F3', // Blue for Computer Science
      is_favourite: true,
    },
    {
      id: 5,
      subject: 'Mathematics',
      title: 'Trigonometry Basics',
      content: `
        Trigonometry deals with the relationships between the sides and angles of triangles.
        - Right Triangle Ratios:
          - Sine: sin θ = opposite/hypotenuse
          - Cosine: cos θ = adjacent/hypotenuse
          - Tangent: tan θ = opposite/adjacent
        - Pythagorean Identity: sin²θ + cos²θ = 1.
      `,
      date: '2024-11-06',
      time: '13:00',
      color: '#FF9800', // Orange for Mathematics
      is_favourite: false,
    },
    {
      id: 6,
      subject: 'Mathematics',
      title: 'Probability Basics',
      content: `
        Probability is the measure of the likelihood of an event occurring.
        - Probability Formula: P(A) = Number of favorable outcomes / Total outcomes.
        - Types of Events:
          - Independent Events: The outcome of one event doesn’t affect the other.
          - Dependent Events: The outcome of one event affects the other.
        - Addition Rule: P(A or B) = P(A) + P(B) - P(A and B).
      `,
      date: '2024-11-06',
      time: '14:00',
      color: '#FF9800', // Orange for Mathematics
      is_favourite: true,
    },
    {
      id: 7,
      subject: 'Astronomy',
      title: 'The Lifecycle of Stars',
      content: `
        Stars undergo a series of stages over billions of years, from formation to eventual death.
        - Stages:
          - Nebula: Cloud of gas and dust collapses to form a protostar.
          - Main Sequence: Hydrogen fusion occurs, stabilizing the star.
          - Red Giant: Star expands as hydrogen runs out, and helium fuses.
          - Supernova: Explosive end of a star, creating heavier elements.
          - Black Hole or Neutron Star: Possible remnants of a supernova.
      `,
      date: '2024-11-06',
      time: '15:00',
      color: '#9C27B0', // Purple for Astronomy
      is_favourite: false,
    },
    {
      id: 8,
      subject: 'Astronomy',
      title: 'Planetary Motion and Kepler’s Laws',
      content: `
        Johannes Kepler’s laws describe the motion of planets around the Sun.
        - First Law: Planets move in elliptical orbits with the Sun at one focus.
        - Second Law: A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.
        - Third Law: The square of a planet's orbital period is proportional to the cube of the semi-major axis of its orbit.
      `,
      date: '2024-11-06',
      time: '16:00',
      color: '#9C27B0', // Purple for Astronomy
      is_favourite: true,
    },
    {
      id: 9,
      subject: 'Economics',
      title: 'Gross Domestic Product (GDP)',
      content: `
        GDP is the total value of goods and services produced within a country over a specific period.
        - Types of GDP:
          - Nominal GDP: Measures output at current prices.
          - Real GDP: Adjusts for inflation, providing a more accurate economic measure.
        - GDP Calculation Methods:
          - Expenditure Approach: GDP = C + I + G + (X - M).
          - Income Approach: Adds all incomes earned by factors of production.
      `,
      date: '2024-11-06',
      time: '17:00',
      color: '#795548', // Brown for Economics
      is_favourite: false,
    },
    {
      id: 10,
      subject: 'Economics',
      title: 'Monetary Policy and Inflation',
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
      date: '2024-11-06',
      time: '18:00',
      color: '#795548', // Brown for Economics
      is_favourite: true,
    },
  ];
}
