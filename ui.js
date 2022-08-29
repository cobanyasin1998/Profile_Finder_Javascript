class UI{
    constructor(){
        this.profileContainer =document.querySelector("#profileContainer");
        this.alert = document.querySelector("#alert");
    }
    showProfile(profile){
        this.profileContainer.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3>
                    <a href="https://placeholder.com"><img class="img-thumbnail" src="https://placehold.jp/3d4070/ffffff/150x150.png"></a>
                </div>
                <div class="col-md-9>
                    <h4>Contact</h4>

                    <ul class="list-group">
                        <li class="list-group-item">${profile.name}</li>
                        <li class="list-group-item">${profile.username}</li>
                        <li class="list-group-item">${profile.email}</li>
                        <li class="list-group-item">${profile.phone}</li>
                        <li class="list-group-item">${profile.website}</li>

                    </ul>
                </div
            </div>
        </div>
        
        
        `;
    }
    showAlert(text){
        this.alert.innerHTML = `${text} is not found`;
    }
    clear(){
        this.profileContainer.innerHTML ="";
        this.alert.innerHTML = "";
    }
}