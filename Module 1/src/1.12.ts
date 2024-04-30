/*
 * Title: Never,Unknown And Nullable Type
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 30-04-2024
 */
{
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Nothing to search");
    }
  };

  searchName(null);

  const getSpeedPerMeterSecond = (value: unknown) => {
    if (typeof value === "number") {
      return value / 1000;
    } else {
      return "Invalid input";
    }
  };

  const result = getSpeedPerMeterSecond("500");
  console.log(result);
}
