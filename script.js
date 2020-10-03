const container = $("#content");

        setTimeout(() => {
            container.animate({ opacity: "1" }, 700);
        }, 3600);

        $("#about").on("click", event => {
            event.preventDefault();
            container.animate({ opacity: "0" });

            setTimeout(() => {
                container.empty();
                container.append(`

                    <div class="card justify-content-center" >

                        <div class="row no-gutters">
                            <div class="col-md-12">

                                <h4 class="card-title ">About Me</h4>
                                <hr>
                            </div>
                        </div>

                        <div class="row no-gutters">

                            <div class="col-md-4">

                                <img class="resize" src="Assets/Images/Selfie.jpg" alt="Santiago Solana" width="300" height="auto">

                            </div>

                            <div class="col-md-7">
                                <div class="card-body">
                                
                                <p class="card-text"> 
                                    I am an aspiring web developer currently enrolled in Georgia Tech’s Full-Stack dev bootcamp, becoming proficient in technologies like JavaScript, jQuery, CSS, and Node.js. With a strong background in Audio engineering design and Customer support you could say I have a passion for learning new technologies and have developed excellent problem solving, research, teamwork, and communication skills over the years. The key factors that drive my decisions when approaching a new project are creativity responsiveness and functionality, I am dedicated to creating robust interactive user experiences. 
                                </p>
                                <p class="card-text"><small class="text-muted">8/07/2020</small></p>

                                </div>
                            </div>

                        </div>
                    </div>
                `);
            }, 400);

            container.animate({ opacity: "1" });
        });

        $("#portfolio").on("click", event => {
            event.preventDefault();
            container.animate({ opacity: "0" });

            setTimeout(() => {
                container.empty();
                container.append(`
           
              

                <div class="card-deck justify-content-center">


                <!-- -------------------------------------------------------------------------------------------- -->
                <div class="card project">
                    <h5 class="modal-title text-center" id="staticBackdropLabel">
                        Client Contact Tracker
                    </h5>
                    <hr>
                    <a href="#" data-toggle="modal" data-target="#ModalOne">
                        <img class="project-img" src="Assets/Images/Contact-Tracker.png" alt="Client Contact Tracker" />
                    </a>
    
                    <div class="modal fade" id="ModalOne" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="ModalLabel">
                                        Testing center Locator
                                    </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img src="Assets/Images/content-tracker.gif" alt="Client Contact Tracker" />
                                    <hr>
    
                                    <p>
                                    An application that tracks the contact points made by employees of an orginization. 
                                    It allows the user to create new contacts, keep track of existing contacts, and stale 
                                    inactive contacts. Additionally, the application keeps track of sent messages between 
                                    contacts, and allows the user to add notes detailing conversations. The objective of this 
                                    application is to create a cohesive space where the user can maintain record of contacts 
                                    and conversations to avoid overlap, and allow collaboration.
                                    </p>
    
                                </div>
                                <div class="project-buttons">
                                    <hr>
    
                                    <a href="https://blooming-eyrie-04708.herokuapp.com/" target="_blank" type="button"
                                        class="btn btn-primary ">
    
                                        <i class="fas fa-globe-americas"></i>
                                        Live site
                                    </a>
    
                                    <a href="https://github.com/santu14/Client-Contact-Tracker" target="_blank" type="button"
                                        class="btn btn-secondary">
                                        <i class="far fa-eye"></i>
                                        View source code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------------------------------- -->
                <div class="card project">
                    <h5 class="modal-title text-center" id="staticBackdropLabel">
                        Testing center Locator
                    </h5>
                    <hr>
    
                    <a href="#" data-toggle="modal" data-target="#ModalTwo">
                        <img class="project-img" src="Assets/Images/testing-center-locator.gif"
                            alt="Testing center Locator" />
                    </a>
    
                    <div class="modal fade" id="ModalTwo" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="ModalLabel">
                                        Testing center Locator
                                    </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img src="Assets/Images/testing-center-animated.gif" alt="Testing center Locator" />
                                    <hr>
    
                                    <p>
                                        The COVID-19 Testing Center Locator is an interactive
                                        application where users can find nearby COVID-19 testing
                                        centers and receive the latest relevant news articles, CDC
                                        updates, as well as state and national statistics.
                                    </p>
    
                                </div>
                                <div class="project-buttons">
                                    <hr>
    
                                    <a href="https://easyacres.github.io/TestingCenterLocator/" target="_blank"
                                        type="button" class="btn btn-primary ">
    
                                        <i class="fas fa-globe-americas"></i>
                                        Live site
                                    </a>
    
                                    <a href="https://github.com/santu14/TestingCenterLocator" target="_blank" type="button"
                                        class="btn btn-secondary">
                                        <i class="far fa-eye"></i>
                                        View source code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------------------------------- -->
            </div>
            <!-- ------------------------------------END-------------------------------------------------------- -->
            <div class="card-deck justify-content-center">
    
    
    
                <!-- -------------------------------------------------------------------------------------------- -->
                <div class="card project2">
                    <h5 class="modal-title text-center" id="staticBackdropLabel">
                        Note Taker
                    </h5>
                    <hr>
    
                    <a href="#" data-toggle="modal" data-target="#ModalThree">
                        <img class="project-img" src="Assets/Images/Note-Taker.png" alt="Note Taker" />
                    </a>
    
                    <div class="modal fade " id="ModalThree" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="ModalLabel">
                                        Daily Planner
                                    </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img src="Assets/Images/Note-Taker-Animated.gif" alt="Note Taker" />
                                    <hr>
                                    <p>
                                        This application allows the user to create, save and delete notes. Note taker was created using HTML/CSS, JavaScript, jQuery, Node.js, Express npm, inquirer npm, and path npm.
                                    </p>
    
                                </div>
                                <div class="project-buttons">
                                    <hr>
    
                                    <a href="https://nameless-mountain-35631.herokuapp.com/" target="_blank" type="button"
                                        class="btn btn-primary ">
    
                                        <i class="fas fa-globe-americas"></i>
                                        Live site
                                    </a>
    
                                    <a href="https://github.com/santu14/Note-taker" target="_blank" type="button"
                                        class="btn btn-secondary">
                                        <i class="far fa-eye"></i>
                                        View source code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------------------------------- -->
                <div class="card project2">
                    <h5 class="modal-title text-center" id="staticBackdropLabel">
                        Weather dashboard
                    </h5>
                    <hr>
                    <a href="#" data-toggle="modal" data-target="#ModalFour">
                        <img class="project-img" src="Assets/Images/Weather-Dashboard.gif" alt="Weather-Dashboard" />
                    </a>
    
                    <div class="modal fade" id="ModalFour" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="ModalLabel">
                                        Testing center Locator
                                    </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img src="Assets/Images/Weather-dashboard-animated.gif" alt="Weather-Dashboard" />
                                    <hr>
    
                                    <p>
                                        A Weather Dashboard application which shows users weather
                                        data based on the cities they input.
                                    </p>
    
                                </div>
                                <div class="project-buttons">
                                    <hr>
    
                                    <a href="https://santu14.github.io/Weather-Dashboard/" target="_blank" type="button"
                                        class="btn btn-primary ">
    
                                        <i class="fas fa-globe-americas"></i>
                                        Live site
                                    </a>
    
                                    <a href="https://github.com/santu14/Weather-Dashboard" target="_blank" type="button"
                                        class="btn btn-secondary">
                                        <i class="far fa-eye"></i>
                                        View source code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------------------------------- -->
            </div>
            <!-- ------------------------------------END-------------------------------------------------------- -->
    
            <div class="card-deck justify-content-center">
    
    
    
                <!-- -------------------------------------------------------------------------------------------- -->
                <div class="card project2">
                    <h5 class="modal-title text-center" id="staticBackdropLabel">
                        Daily Planner
                    </h5>
                    <hr>
    
                    <a href="#" data-toggle="modal" data-target="#ModalFive">
                        <img class="project-img" src="Assets/Images/daily-planner.jpg" alt="Daily-Planner" />
                    </a>
    
                    <div class="modal fade " id="ModalFive" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="ModalLabel">
                                        Daily Planner
                                    </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img src="Assets/Images/daily-planner-animated.gif" alt="Daily Planner" />
                                    <hr>
                                    <p>
                                        This is application allows the user to save different tasks and events by the
                                        hour
                                        of the day.
                                    </p>
    
                                </div>
                                <div class="project-buttons">
                                    <hr>
    
                                    <a href="https://santu14.github.io/Daily-Planner-App/" target="_blank" type="button"
                                        class="btn btn-primary ">
    
                                        <i class="fas fa-globe-americas"></i>
                                        Live site
                                    </a>
    
                                    <a href="https://github.com/santu14/Daily-Planner-App" target="_blank" type="button"
                                        class="btn btn-secondary">
                                        <i class="far fa-eye"></i>
                                        View source code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------------------------------- -->
                <div class="card project2">
                    <h5 class="modal-title text-center" id="staticBackdropLabel">
                        Always Sunny trivia Quiz
                    </h5>
                    <hr>
    
                    <a href="#" data-toggle="modal" data-target="#ModalSix">
                        <img class="project-img" src="Assets/Images/Always Sunny Trivia.jpg" alt="Always Sunny Trivia" />
                    </a>
    
                    <div class="modal fade" id="ModalSix" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="ModalLabel">
                                        Always Sunny trivia Quiz
                                    </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img src="Assets/Images/Always Sunny Trivia.gif" alt="Daily Planner" />
                                    <hr>
    
                                    <p>
                                        Always Sunny in Philadelphia trivia game! this trivia game was created with
                                        JavaScript, jQuery, HTML, and CSS using local storage to keep high scores.
                                    </p>
    
                                </div>
    
                                <div class="project-buttons">
                                    <hr>
    
                                    <a href="https://santu14.github.io/Always-Sunny-Trivia-Quiz/" target="_blank"
                                        type="button" class="btn btn-primary ">
    
                                        <i class="fas fa-globe-americas"></i>
                                        Live site
                                    </a>
    
                                    <a href="https://github.com/santu14/Always-Sunny-Trivia-Quiz" target="_blank"
                                        type="button" class="btn btn-secondary">
                                        <i class="far fa-eye"></i>
                                        View source code
                                    </a>
                                </div>
    
    
    
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>

                    
               
            `);
            }, 400);
            container.animate({ opacity: "1" });
        });

        $("#contact").on("click", event => {
            event.preventDefault();
            container.animate({ opacity: "0" });

            setTimeout(() => {
                container.empty();

                container.append(`
           
              

            <div class="card justify-content-center">
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <h5 class="card-title">Contact</h5>
                            <hr>
                            <div class="form-group">
                                <label for="FormControlTextarea1">Name</label>
                                <textarea class="form-control" id="FormControlTextarea1" rows="1"></textarea>
                            </div>
                            <label for="InputEmail1">Email address</label>
                            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp">
                        
                        </div>
                        
                        <div class="form-group">
                            <label for="FormControlTextarea1">Message</label>
                            <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
                    
               
            `);
            }, 400);
            container.animate({ opacity: "1" });
        });