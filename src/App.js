import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow.js";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch("iron");
  }

  performSearch(searchTerm) {
    console.log("Open API를 사용하여 검색 기능을 수행합니다..");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?&api_key=edd6daa7185c4043f2df0172439e6b40&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("데이터를 가져오는데 성공함!");
        const results = searchResults.results;
        const movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          console.log(movie.poster_path);
          console.log(movie.title);
          //
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.log("데이터를 가져오는데 실패함!");
      }
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);

    const boundObj = this;
    const searchTerm = event.target.value;
    boundObj.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="60" src="logo.svg" />
              </td>
              <td width="8" />
              <td>
                <h2>혜진 영화 DB 프로젝트</h2>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          style={{
            fontSize: 15,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="여기에 영화 검색 키워드를 입력하세요.."
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
