import packageJson from "../../../../package.json"

export const Version = () => {
    return (
        <div>
            <h3>Current versions 👉🏼 {packageJson.version} 🎉</h3>
        </div>
    )
}