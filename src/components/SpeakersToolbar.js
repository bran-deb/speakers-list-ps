

const SpeakersToolbar = ({ theme, setTheme, showSessions, setShowSessions }) => {

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
                                <span className="switch" ></span>
                            </label>
                        </li>
                        <li
                            className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
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
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpeakersToolbar