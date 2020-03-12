$(document).ready(function () {
    $(document).on("click", ".saveBtn", function () {
      var id = $(this).attr("id");
      console.log(id)
        var value = $("#text"+ id).val()
        console.log(value)
        var time = $(this).attr("id");
        console.log(time)
        console.log(value)
        localStorage.setItem(time, value);
    });
    $("#currentDay").text(moment().format("h:mma D MMM YYYY "));

        // $(".space").addClass

    for (var i = 9; i < 18; i++) {
        var isBefore, isSame, isAfter;

        var scheduleTime = parseInt(moment().format("HH"))
        console.log(scheduleTime);

        if (i < scheduleTime) {
            isBefore = true
            isSame = false
            isAfter = false

        }

        else if (i === scheduleTime) {
            isBefore = false
            isSame = true
            isAfter = false

        }

        else {
            isBefore = false
            isSame = false
            isAfter = true

        }
        
        var todo = localStorage.getItem(i)
        console.log(todo)

        // console.log(iscurrentDate);

        $(".container").append(`
        
        <div class="space ${isBefore ? "past" : ""} ${isSame ? "present" : ""} ${isAfter ? "future" : ""}">
        <div id="hour-${i}" class="row time-block"></div>
        <div class="col-md-10 hour">${moment(i + ":00", 'HH:mm').format('h:mm a')}</div>
        <textarea class="col-md-10 description" id="text${i}">
        </textarea>
        <button class="btn saveBtn col-md-1" id=${i}>
        <i class="fas fa-save"></i>
        </button>

        </div>
        `)

    }


});



