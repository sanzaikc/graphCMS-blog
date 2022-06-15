import moment from "moment";

class FormatDate {
  private date;

  constructor(date: string) {
    this.date = moment(date);
  }

  DDMMYYYY() {
    return this.date.format("DD/MM/YYYY");
  }

  formalDate() {
    return this.date.format("MMM DD, YYYY");
  }

  fromNow() {
    return this.date.fromNow();
  }

  calendar() {
    return this.date.calendar();
  }
}

export default FormatDate;
