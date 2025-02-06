export function displayRecord(record, gameTime){
    return record ? (
      <p>
       {record.split(":")[0] <= gameTime.minutes && record.split(":")[1] < gameTime.seconds ? `A new Record! ${gameTime.minutes <= 10 ? `0${gameTime.minutes}` : gameTime.minutes}: ${gameTime.seconds >= 10 ? gameTime.seconds : `0${gameTime.seconds}`}` : (
        `Your record: ${
          record.split(":")[0] <= 10
            ? `0${record.split(":")[0]}`
            : record.split(":")[0]
        }:${
          record.split(":")[1] < 10
            ? `0${record.split(":")[1]}`
            : record.split(":")[1]
        }`)}
      </p>
    ) : (
      ""
    )
  }