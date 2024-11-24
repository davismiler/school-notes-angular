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

  async getAllNotes(): Promise<NotecardInterface[]> {
    const notes = await fetch(`${this.API_URL}/notes`);
    return (await notes.json()) ?? [];
  }

  async getNoteById(id: Number): Promise<NotecardInterface[]> {
    const notes = await fetch(`${this.API_URL}/notes/${id}`);
    return (await notes.json()) ?? [];
  }

  async deleteNoteById(id: Number): Promise<any> {
    console.log(typeof id);

    const response = await fetch(`${this.API_URL}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return (await response.json()) ?? [];
  }

  async updateNote(obj: any): Promise<void> {
    await fetch(`${this.API_URL}/notes/${obj.ID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      // .then((data) => console.log(data))
      .catch((error) => console.error("error:", error));
  }

  async getNotesCount(): Promise<{ count: number }> {
    const count = await fetch(`${this.API_URL}/notes?count=true`);
    return (await count.json()) ?? [];
  }

  async addNote(noteObj: NotecardInterface): Promise<void> {

    await fetch(`${this.API_URL}/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteObj),
    })
      // .then((data) => console.log(data))
      .catch((error) => console.error("error:", error));
  }

  // Note Subject Services
  async getAllSubjects(): Promise<SubjectInterface[]> {
    const subjectsResponse = await fetch(`${this.API_URL}/subjects`);
    const subjects = (await subjectsResponse.json()) ?? [];

    // Add the isEditing property to each object
    const updatedSubjects = subjects.map((subject: SubjectInterface) => ({
      ...subject,
      isEditing: false,
    }));

    return updatedSubjects;
  }

  async addSubject(subjectObj: { name: string; color: string }): Promise<void> {
    await fetch(`${this.API_URL}/subjects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subjectObj),
    });
  }

  async updateSubject(subjectObj: SubjectInterface) {
    console.log(subjectObj);

    const subjectObjId = subjectObj._id;

    await fetch(`${this.API_URL}/subjects/${subjectObjId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subjectObj),
    })
      // .then((data) => console.log(data))
      .catch((error) => console.error("error:", error));
    // console.log(subjectObj);
  }

  async deleteSubjectById(id: number): Promise<void> {
    await fetch(`${this.API_URL}/subjects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // async getSubjectByNoteID(id: Number): Promise<SubjectInterface[]> {
  //   const subject = await fetch(
  //     `${this.API_URL}/subjects/getSubjectByNoteID/${id}`
  //   );
  //   return (await subject.json()) ?? [];
  // }
}
