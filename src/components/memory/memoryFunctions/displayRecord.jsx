export function displayRecord(record, gameTime){
    return record ? (
      <p>
        Your record: {
          record.split(":")[0] <= 10
            ? `0${record.split(":")[0]}`
            : record.split(":")[0]
        }:{
          record.split(":")[1] < 10
            ? `0${record.split(":")[1]}`
            : record.split(":")[1]
        }
      </p>
    ) : (
      ""
    )
  }