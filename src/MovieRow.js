import React from "react";

class MovieRow extends React.Component {
  //
  viewMovie() {
    //[실습 21-2]
    //console.log("영화 상세보기를 합니다...");
    //console.log(this.props.movie.title);
    //[실습 21-4]
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.movie.poster_src} />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              {/* [실습21-1] */}
              <input
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="상세보기"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
