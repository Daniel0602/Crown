import "../styles/components/SchoolScheduleDay.css";

export default function SchoolScheduleDay(props: any) {
  return (
    <div className="widget-div school-schedule__day">
      <p className="day-title">{props.day}</p>
      <p>
        12:30 {props.subjects[0]}
        <br />
        13:30 {props.subjects[1]}
        <br />
        <p className="recess">14:30 Recreo</p>
        <br />
        14:45 {props.subjects[2]}
        <br />
        <p className="recess">15:45 Recreo</p>
        <br />
        16:00 {props.subjects[3]}
        <br />
        17:00 {props.subjects[4]}
        <br />
      </p>
    </div>
  );
}
