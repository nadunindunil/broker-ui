import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class JoinServiceService {

  constructor(private http : Http, private router : Router) {}

  public logIn(name : string) {

    return this
      .http
      .post('https://stock-market-simulator.herokuapp.com/api/v1/game', {gameName: name})
      .subscribe(response => {
        const decoded : any = response.json();
        if (decoded.name === name) {
          const userData = {
            isLoggedIn: true,
            ...decoded
          }
          console.log(userData);

          this
            .http
            .get('https://exithost.000webhostapp.com/bank/startgame')
            .subscribe(response => {
              // after game is reset
              const responseStart : any = response.json();
              console.log('startGame', responseStart);
              if (responseStart.message === "Ready to start game") {

                this
                  .http
                  .post('https://exithost.000webhostapp.com/bank/account', {
                    Name: name
                  }, {
                    headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
                  })
                  .subscribe(response => {
                    const decodedBankAccount : any = response.json();
                    console.log('create join', decodedBankAccount);
                    if (decodedBankAccount.Name === name) {
                      localStorage.setItem("userData", JSON.stringify(userData));
                      this
                        .router
                        .navigate(['/dashboard']);
                    }
                  })
              }

            })
        } else {
          alert("Login Failed")
        }
      })
  }

}
