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
