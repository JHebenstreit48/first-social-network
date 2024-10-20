// use JavaScript Date class to format the date

function formattedDate(date: any): string {
  // create a new date object from the input date
  const formattedDate = new Date(date);

  // get the month, day, and year from the date object
  const [month, day, year] = [
    formattedDate.getMonth() + 1,
    formattedDate.getDate(),
    formattedDate.getFullYear(),
  ];

  // then return the formatted date string
  return `${month}/${day}/${year}`;
}

// export the function
export default formattedDate;
