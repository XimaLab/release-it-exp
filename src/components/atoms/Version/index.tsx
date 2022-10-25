import packageJson from "../../../../package.json"

export const Version = () => {
    return (
        <div>
            <p>Current version 👉🏼 {packageJson.version} 🎉</p>
        </div>
    )
}