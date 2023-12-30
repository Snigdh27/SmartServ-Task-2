$(document).ready(function () {
  $("#btnRight").click(function () {
    var selectedItem = $("#leftValues option:selected");
    $("#rightValues").append(selectedItem);
  });

  $("#btnLeft").click(function () {
    var selectedItem = $("#rightValues option:selected");
    $("#leftValues").append(selectedItem);
  });

  $(".next_button").click(function () {
    fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
      .then((data) => {
        return data.json();
      })
      .then((responseData) => {
        const objectData = responseData.products;
        const dataArray = Object.keys(objectData).map((key) => ({
          id: key,
          ...objectData[key],
        }));
        const sortedData = dataArray.sort(
          (a, b) => b.popularity - a.popularity
        );

        let tableData = "";
        sortedData.forEach((values, index) => {
          tableData += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${values.title}</td>
                        <td>${values.price}</td>
                    </tr>`;
        });

        document.getElementById("tableContainer").innerHTML = `
                    <table border='1'>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody id="table_body">
                            ${tableData}
                        </tbody>
                    </table>
                `;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
});
$(document).ready(function () {
  $("#btnRight").click(function () {
    var selectedItem = $("#leftValues option:selected");
    $("#rightValues").append(selectedItem);
  });

  $("#btnLeft").click(function () {
    var selectedItem = $("#rightValues option:selected");
    $("#leftValues").append(selectedItem);
  });
});
