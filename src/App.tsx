function App() {
  return (
    <>
      <div
        flex
        w-100vw
        h-100vh
        bg-gray-800>

        <div
          ma
          text-white >
          <h1
            animate-bounce-alt
            animate-count-infinite
            animate-duration-1s>
            Unocss
          </h1>

          <div flex="~ items-center justify-center">
            <div>hello world</div>

            <div
              className="i-material-symbols:emoji-objects-rounded"
              text="amber 2em" />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
