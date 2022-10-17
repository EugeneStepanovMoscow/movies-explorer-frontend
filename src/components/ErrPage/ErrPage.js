function ErrPage ({
  err,
  errText,
  handleBack,
})
 {
  return (
    <main className="err-page">
      <h2 className="err-page__err">{err}</h2>
      <p className="err-page__err-text">{errText}</p>
      <button className="err-page__exit" onClick={handleBack}>Назад</button>
    </main>
  )
}

export default ErrPage
