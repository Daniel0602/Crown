import "../styles/pages/School.css";

import SchoolScheduleDay from "../components/SchoolScheduleDay";

export default function School() {
  return (
    <div className="page">
      <div id="school-schedule">
        <h2 className="title">Horarios de escuela:</h2>
        <div id="school-schedule__week">
          <SchoolScheduleDay
            day="Lunes"
            subjects={[
              "Literatura",
              "Trabajo y ciudadanía",
              "Trabajo y ciudadanía",
              "Matemáticas",
              "Matemáticas",
            ]}
          />
          <SchoolScheduleDay
            day="Martes"
            subjects={[
              "Biología, genética y sociedad",
              "Biología, genética y sociedad",
              "Física clásica y moderna",
              "Física clásica y moderna",
              "Inglés",
            ]}
          />
          <SchoolScheduleDay
            day="Miercoles"
            subjects={[
              "Química del carbono",
              "Literatura",
              "Literatura",
              "Filosofia",
              "Filosofia",
            ]}
          />
          <SchoolScheduleDay
            day="Jueves"
            subjects={[
              "Física clásica y moderna",
              "Biología, genética y sociedad",
              "Quimíca del carbono",
              "Quimíca del carbono",
              "Inglés",
            ]}
          />
          <SchoolScheduleDay
            day="Viernes"
            subjects={[
              "Dormir",
              "Ambiente, desarrollo y sociedad",
              "Ambiente, desarrollo y sociedad",
              "Matemáticas",
              "Matemáticas",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
