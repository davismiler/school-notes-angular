import { Injectable } from "@angular/core";
import { NotecardInterface } from "../interfaces/notecard-interface";
import { SubjectInterface } from "../interfaces/subject-interface";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class noteService {
  private API_URL = environment.apiUrl;
  
  constructor() {}

  async getAllNotes(): Promise<NotecardInterface[]> {
    try {
      const response = await fetch(`${this.API_URL}/notes`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return (await response.json()) ?? [];
    } catch (error) {
      console.error('Error fetching notes:', error);
      return [];
    }
  }

  async getNoteById(id: Number): Promise<NotecardInterface[]> {
    try {
      const response = await fetch(`${this.API_URL}/notes/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return (await response.json()) ?? [];
    } catch (error) {
      console.error('Error fetching note by ID:', error);
      return [];
    }
  }

  async deleteNoteById(id: string | number): Promise<any> {
    try {
      const response = await fetch(`${this.API_URL}/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return (await response.json()) ?? [];
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  }

  async updateNote(obj: any): Promise<void> {
    try {
      const response = await fetch(`${this.API_URL}/notes/${obj.ID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating note:", error);
      throw error;
    }
  }

  async getNotesCount(): Promise<{ count: number }> {
    try {
      const response = await fetch(`${this.API_URL}/notes?count=true`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return (await response.json()) ?? { count: 0 };
    } catch (error) {
      console.error('Error fetching notes count:', error);
      return { count: 0 };
    }
  }

  async addNote(noteObj: NotecardInterface): Promise<void> {
    try {
      const response = await fetch(`${this.API_URL}/notes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteObj),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error adding note:", error);
      throw error;
    }
  }

  // Note Subject Services
  async getAllSubjects(): Promise<SubjectInterface[]> {
    try {
      const response = await fetch(`${this.API_URL}/subjects`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const subjects = (await response.json()) ?? [];

      // Add the isEditing property to each object
      const updatedSubjects = subjects.map((subject: SubjectInterface) => ({
        ...subject,
        isEditing: false,
      }));

      return updatedSubjects;
    } catch (error) {
      console.error('Error fetching subjects:', error);
      return [];
    }
  }

  async addSubject(subjectObj: { name: string; color: string }): Promise<void> {
    try {
      const response = await fetch(`${this.API_URL}/subjects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subjectObj),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error adding subject:", error);
      throw error;
    }
  }

  async updateSubject(subjectObj: SubjectInterface): Promise<void> {
    try {
      const subjectObjId = subjectObj._id;
      const response = await fetch(`${this.API_URL}/subjects/${subjectObjId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subjectObj),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating subject:", error);
      throw error;
    }
  }

  async deleteSubjectById(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.API_URL}/subjects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting subject:", error);
      throw error;
    }
  }
}
