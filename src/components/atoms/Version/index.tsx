import packageJson from "../../../../package.json"

export const Version = () => {
    return (
        <p>Current version 👉🏼 {packageJson.version} 🎉</p>
    )
}