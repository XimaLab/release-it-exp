import packageJson from "../../../../package.json"

export const Version = () => {
    return (
        <div>
            <h3>Current version 👉🏼 {packageJson.version} 🎉</h3>
        </div>
    )
}