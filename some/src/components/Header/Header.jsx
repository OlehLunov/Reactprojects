import "./Header.css"

export default function Header(){
  const now = new Date()

    return (
        <header>
          <h4>Имя пользователя</h4>
          <h2>Dashboard</h2>
          <span>Время: {now.toLocaleTimeString()}</span>
        </header>
    )
}