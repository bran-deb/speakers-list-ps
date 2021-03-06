import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { SpeakerFilterContext } from "../context/SpeakerFilterContext"

const SpeakersToolbar = () => {

    //usamos react context para no pasar theme en props
    const { theme, setTheme } = useContext(ThemeContext)
    //usamos react context para no pasar sessions en props
    const {
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        setSearchQuery,
        EVENT_YEARS,
    } = useContext(SpeakerFilterContext)

    const change = () => {
        setShowSessions(!showSessions)
    }
    const changeTheme = (e) => {
        setTheme(e.target.value)
    }

    return (
        <section className="toolbar dark-theme-header">
            <div className="container">
                <div className="justify-content-between">
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show Sessions&nbsp;&nbsp;</b>
                            <label className="fav">
                                <input
                                    type="checkbox"
                                    checked={showSessions}
                                    onChange={change}
                                />
                                <span className="switch"></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
                            <strong>Theme</strong>
                            <label className="dropdown">
                                <select
                                    className="form-control theme"
                                    value={theme}
                                    onChange={changeTheme}
                                >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                    onChange={(event) => {
                                        setSearchQuery(event.target.value);
                                    }}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex flex-column flex-md-row">
                            <strong>Year</strong>
                            <label className="dropmenu">
                                <select
                                    className="form-control"
                                    value={eventYear}
                                    onChange={({ currentTarget }) => {
                                        setEventYear(currentTarget.value);
                                    }}
                                >
                                    {EVENT_YEARS.map(function (year) {
                                        return (
                                            <option value={year} key={year}>
                                                {year}
                                            </option>
                                        );
                                    })}
                                </select>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SpeakersToolbar;
