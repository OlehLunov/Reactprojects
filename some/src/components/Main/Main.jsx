
function MainInfo(){
    return(
        <li>
            <p>
              <strong>Текст</strong> Не жирній
            </p>
        </li>
    )
}

export default function Main() {
  return (
    <main>
      <section>
        <h3>Пример 1</h3>

        <ul>
         <MainInfo />
         <MainInfo />
         <MainInfo />
        </ul>
      </section>
    </main>
  );
}
