# Exit immediately if a command exits with a non-zero status.
set -e

# Print commands and their arguments as they are executed.
set -x

# Install dependencies
echo "Installing dependencies..."
yarn install # or npm install

# Build the project
echo "Building the project..."
yarn build # or npm run build

# Optionally, run tests
echo "Running tests..."
yarn test # or npm run test

# Copy files to the output directory
echo "Copying files to the output directory..."
mkdir -p output
cp -R dist/ output/ # Adjust this line based on where your build artifacts are located

# Any other necessary steps
# For example, database migrations, cleanup, etc.