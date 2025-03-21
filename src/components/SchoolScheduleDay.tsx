import "../styles/components/SchoolScheduleDay.css";

import Division from "./Division";

export default function SchoolScheduleDay(props: any) {
  return (
    <div className="school-schedule-day">
      <p className="day-title">{props.day}</p>
      <Division width="120px" height="1px" color=" hsl(0,0%,0%)" />
      <ul>
        <li className="subject">{props.subjects[0]}</li>
        <li className="subject">{props.subjects[1]}</li>
        <li className="recess">Recreo</li>
        <li className="subject">{props.subjects[2]}</li>
        <li className="recess">Recreo</li>
        <li className="subject">{props.subjects[3]}</li>
        <li className="subject">{props.subjects[4]}</li>
      </ul>
    </div>
  );
}
