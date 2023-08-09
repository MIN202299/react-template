// @ts-nocheck

export default function TestUnocss() {
  return (
    <div
      w-100vw
      h-100vh
      bg-gray-800
      flex>

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
          <div >test iconify icon</div>

          <div
            className="i-material-symbols:emoji-objects-rounded"
            text="amber 2em" />
        </div>
      </div>

    </div>
  )
}
