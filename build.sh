set -eo pipefail

rm -rf dist node-server
git clone https://github.com/honojs/node-server.git
gpg -d --batch --yes --passphrase "$NOTE_ENV" node-edge-runtime.patch | git apply --directory node-server
bash node-server/build.sh
rm -rf node-server
