#!/bin/bash
BACKGROUND=()
ENCRYPT_FRAME=(src/ts/trusted_input.ts)
DECRYPT_FRAME=()

tsc --out src/js/background.js ${BACKGROUND[@]}
tsc --out src/js/encrypt_frame.js ${ENCRYPT_FRAME[@]}
tsc --out src/js/decrypt_frame.js ${DECRYPT_FRAME[@]}
