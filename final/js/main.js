$(() => {
    /**辨識用變數，判斷是否先看過note */
    var Count = 0;
    /*收起彈出頁面*/
    $(".close").click(function () {
        $(".introduction-modal-cover ").hide();
        $(".introduction-modal").hide();
    });

    /*introduction modal*/
    $(".second").hide();
    $(".third").hide();
    $(".fourth").hide();
    $(".introduction-modal-cover-dark-version").hide();
    $(".countdown").hide();

    $(".direction-arrow.1").click(function () {
        $(".introduction-modal.first").hide();
        $(".introduction-modal.second").show();
        $(".introduction-modal-cover").hide();
        $(".introduction-modal-cover-dark-version").show();
    });

    $(".direction-arrow.2").click(function () {
        $(".introduction-modal.second").hide();
        $(".introduction-modal.third").show();
    });

    $(".direction-arrow.3").click(function () {
        $(".introduction-modal.third").hide();
        $(".introduction-modal.fourth").show();
    });

    /*圖書館介紹*/
    $(".introduction-modal.gazetteer").hide();
    $(".special-item.gazetteer").click(function () {
        $(".introduction-modal.gazetteer").show();
        $(".introduction-modal-cover").show();
    })

    $(".introduction-modal.reference-desk").hide();
    $(".special-item.reference-desk").click(function () {
        if (Count == 1) {
            $(".reference-desk").fadeOut("slow");
        }
        $(".introduction-modal.reference-desk").show();
        $(".introduction-modal-cover").show();
    })
    $(".special-item.reference-desk-hide").click(function () {
        $(".reference-desk").fadeOut("slow");
        $(".introduction-modal.reference-desk").show();
        $(".introduction-modal-cover").show();
    })

    $(".introduction-modal.reference-book").hide();
    $(".special-item.book2").click(function () {
        if (Count == 1) {
            $(".special-item.book2").fadeOut("slow");
        }
        $(".introduction-modal.reference-book").show();
        $(".introduction-modal-cover").show();

    })

    $(".introduction-modal.journal").hide();
    $(".special-item.book1").click(function () {
        if (Count == 1) {
            $(".special-item.book1").fadeOut("slow");
        }
        $(".introduction-modal.journal").show();
        $(".introduction-modal-cover").show();

    })

    $(".introduction-modal.borrow").hide();
    $(".special-item.borrow").click(function () {
        if (Count == 1) {
            $(".special-item.book3").fadeOut("slow");
        }
        $(".introduction-modal.borrow").show();
        $(".introduction-modal-cover").show();

    })

    $(".special-item.book4").hide();
    $(".introduction-modal.return").hide();
    $(".special-item.return").click(function () {
        if (Count == 1) {
            $(".special-item.book4").fadeIn("slow");
            $(".star-return").fadeIn("slow");
        }
        $(".introduction-modal.return").show();
        $(".introduction-modal-cover").show();
    })

    $(".special-item.return-book").click(function () {
        $(".special-item.return-book").hide();
    })

    $(".introduction-modal.computer").hide();
    $(".special-item.computer-dark").click(function () {
        if (Count == 1) {
            $(".special-item.computer-dark").fadeOut("slow");
        }
        $(".introduction-modal.computer").show();
        $(".introduction-modal-cover").show();
    })

    $(".special-item.computer").click(function () {
        $(".introduction-modal.computer").show();
        $(".introduction-modal-cover").show();
    })

    $(".introduction-modal.maps").hide();
    $(".special-item.maps").click(function () {
        $(".introduction-modal.maps").show();
        $(".introduction-modal-cover").show();

    })

    $(".special-item.LCC").click(function () {
        if (Count == 1) {
            $(".special-item.LCC").animate({
                top: "25vh"
            }, "slow");
        }
    })

    $(".special-item.red-button").click(function () {
        $(".special-item.red-button").hide();
        $(".special-item.maps").animate({
            top: "25vh"
        }, "slow");
    })

    $(".special-item.green-button").click(function () {
        $(".special-item.red-button").show();
        $(".special-item.maps").animate({
            top: "23vh"
        }, "slow");
    })

    $(".special-item.light-bottom").mousedown(function () {
        $(".special-item.light-bottom").animate({
            top: "10vh"
        }, "slow");
    })
    $(".special-item.light-bottom").mouseup(function () {
        $(".special-item.light-bottom").animate({
            top: "8vh"
        }, "slow");
        if (Count == 1) {
            $(".star-light").show(2000);
        }
    })

    $(".introduction-modal.spe-col").hide();
    $(".special-item.spe-col").click(function () {
        $(".introduction-modal.spe-col").show();
        $(".introduction-modal-cover").show();
    })

    $(".introduction-modal.poster").hide();
    $(".special-item.poster").click(function () {
        $(".introduction-modal.poster").show();
        $(".introduction-modal-cover").show();
    })




    /*撿星星*/
    /*按鈕出現、抽屜打開*/
    $(".star").hide();
    $(".special-item.opendrawer").hide();
    $(".special-item.note").hide();
    $(".introduction-modal.note").hide();

    $(".special-item.doc").click(function () {
        $(".special-item.doc").hide();
    })

    $(".special-item.hidebutton").click(function () {
        $(".special-item.opendrawer").toggle();
        $(".special-item.note").toggle();
    })
    /**觸發星星 */
    $(".special-item.note").click(function () {
        $(".introduction-modal.note").show();
        $(".introduction-modal-cover").show();
        $(".star").fadeIn("slow");
        $(".star-return").hide();
        $(".star-light").hide();
        Count++;
    })



    /**算星星數 */
    var starNumber = 0;
    $(".special-item.door-open").hide();
    $(".star").click(function () {
        starNumber++;
        $(this).hide();
        $(".starCollect").text("STAR: " + starNumber);
        /*測試用
        console.log(starNumber);
        */
    })
    $(".special-item.door").click(function () {
        if (starNumber < 12) {
            alert("大門鎖住了，你還沒有找到開啟的方法喔!");
        }
        if (starNumber == 12) {
            $(".special-item.door-open").show();
            alert("大門已解鎖!");
        }

    })

    $(".starCollect").hide();
    $(".special-item.note").click(function () {
        $(".starCollect").show(1000);
    })
    $(".starCollect").text("STAR: " + starNumber);



    /*倒數計時*/
    $(".btn.btn-outline-warning").click(function () {
        $(".introduction-modal.fourth").hide();
        $(".introduction-modal-cover-dark-version").hide();
        $(".countdown").show();
        var time = 10000; //倒數7min
        var spentTime = 0;
        ! function MyCounter() {
            if (time <= 0) {
                window.open("./fail.html");
            } else {
                $(".countdown").text("Countdown: " + (time / 1000) + " sec");
                setTimeout(MyCounter, 1000);
                spentTime = spentTime + 1;
            }
            time -= 1000;
        }();
    });


})