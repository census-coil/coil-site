set -o allexport
source '.env'
airtable-export _data $AIRTABLE_TOP_ID coil_people --key=$AIRTABLE_API_KEY
set +o allexport