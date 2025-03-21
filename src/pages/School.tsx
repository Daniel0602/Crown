import "../styles/pages/School.css";

import SchoolScheduleDay from "../components/SchoolScheduleDay";

export default function School() {
  const subjects: any = [
    ["Literatura", "Ciudadanía", "Ciudadanía", "Matemáticas", "Matemáticas"],
    ["Biología", "Biología", "Física", "Física", "Inglés"],
    ["Química", "Literatura", "Literatura", "Filosofia", "Filosofia"],
    ["Física", "Biología", "Quimíca", "Quimíca", "Inglés"],
    ["Dormir", "Ambiente", "Ambiente", "Matemáticas", "Matemáticas"],
  ];

  return (
    <div className="page">
      <div id="school-schedule">
        <h2 className="title">Horarios de escuela:</h2>
        <div id="school-schedule-week">
          <SchoolScheduleDay day="Lunes" subjects={subjects[0]} />
          <SchoolScheduleDay day="Martes" subjects={subjects[1]} />
          <SchoolScheduleDay day="Miercoles" subjects={subjects[2]} />
          <SchoolScheduleDay day="Jueves" subjects={subjects[3]} />
          <SchoolScheduleDay day="Viernes" subjects={subjects[4]} />
        </div>
      </div>
    </div>
  );
}
