const Footer = () => {
    return (
        <footer className="max-w-screen-xl border-t-[1px] border-black/40 mx-auto py-4 flex justify-between px-2">
            <div className="flex items-center gap-1">
                <img src="/logo.svg" alt="logo" width={30}/>
                <p>MedSync @2024</p>
            </div>
            <div>
                Powered by Google Gemini
            </div>
        </footer>
    )
}

export default Footer