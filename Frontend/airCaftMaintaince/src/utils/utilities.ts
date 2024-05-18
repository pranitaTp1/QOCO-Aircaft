import moment from "moment";

const formatDate = (date:Date):string => {
    return date && moment(date).format("MM/DD/YYYY HH:mm") || ''
  };
export {formatDate};